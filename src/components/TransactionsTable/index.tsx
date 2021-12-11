import { Container } from "./styles";

export function TransactionsTable() {
    return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Título</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Salário</td>
                      <td className="active">R$ 1.500</td>
                      <td>Estágio</td>
                      <td>10/12/2021</td>
                  </tr>
                  <tr>
                      <td>Aluguel</td>
                      <td className="passive">R$ -200,00</td>
                      <td>Moradia</td>
                      <td>10/12/2021</td>
                  </tr>
                  <tr>
                      <td>Ticket</td>
                      <td className="active">R$ 425,00</td>
                      <td>Vale Refeição</td>
                      <td>30/11/2021</td>
                  </tr>
                  <tr>
                      <td>Oi Fibra</td>
                      <td className="passive">R$ -119,00</td>
                      <td>Internet</td>
                      <td>10/12/2021</td>
                  </tr>
              </tbody>
          </table>
      </Container>
    )
}