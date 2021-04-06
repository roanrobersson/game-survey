import React, { useState, useEffect } from 'react';
import Filters from 'core/components/filters';
import './styles.css';
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';
import { makeRequest } from 'core/utils/request';
import { useAlert } from 'react-alert';

type PieChartData = {
  labels: string[];
  series: number[];
}

type BarChartData = {
  x: string;
  y: number;
}

const initialPieData = {
  labels: [],
  series: []
}


const Charts = () => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
  const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
  const [genderData, setGenderData] = useState<PieChartData>(initialPieData);
  const alert = useAlert();

  useEffect(() => {
    let recordsResponse: any;
    let gamesResponse: any;

    async function getData() {
      try {
        recordsResponse = await makeRequest({ url: '/records' });
        gamesResponse = await makeRequest({ url: '/games' });

        const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
        setBarChartData(barData);
  
        const platformChartData = getPlatformChartData(recordsResponse.data.content);
        setPlatformData(platformChartData);
  
        const genreChartData = getGenderChartData(recordsResponse.data.content);
        setGenderData(genreChartData);

      } catch (error) {
        if (error.response) {
          alert.error("Erro ao carregar dados")
        } else {
          alert.error("Erro de conexão");
        }
      };
    }
    getData();
  }, [alert]);

  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA" />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">
            Jogos mais votados
          </h1>
          <div className="games-container">
            <Chart
              options={barOptions}
              type="bar"
              height="650"
              series={[{ data: barChartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart
              options={{ ...pieOptions, labels: platformData?.labels }}
              type="donut"
              series={platformData?.series}
              width="350"
            />
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart
              options={{ ...pieOptions, labels: genderData?.labels }}
              type="donut"
              series={genderData?.series}
              width="350"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts;