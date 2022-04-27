import { Container } from "./styles";


export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                  
                    <tr>
                        <td>Janta</td>
                        <td className="deposit">R$ 50,00</td>
                        <td>Alimentação</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Cabeleleira</td>
                        <td className="withdraw">- R$ 50,00</td>
                        <td>Beleza</td>
                        <td>20/06/2020</td>
                    </tr>
            </tbody>

            </table>
        </Container>
    )
}