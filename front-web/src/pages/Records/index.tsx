import React, { useEffect, useState } from 'react';
import './styles.css';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import Filters from 'core/components/filters';
import { makeRequest } from 'core/utils/request';
import { useAlert } from 'react-alert';

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);
  const alert = useAlert();
  
  useEffect(() => {
    makeRequest({ url: `/records?linesPerPage=12&page=${activePage}` })
      .then(response => setRecordsResponse(response.data))
      .catch(error => {
        if (error.response) {
          alert.error("Erro ao listar registros")
        } else {
          alert.error("Erro de conexão");
        }
      });
  }, [activePage, alert]);

  const handlePageChange = (index: number) => {
    setActivePage(index)
  }

  return (
    <div className="page-container">
      <Filters link="/charts" linkText="VER GRAFICO"/>
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map(record => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        activePage={activePage}
        goToPage={handlePageChange}
        totalPages={recordsResponse?.totalPages}
      />
    </div>
  );
}

export default Records;