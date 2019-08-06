import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import '../styles/styles.css'
export default function Header() {
    return (
        <div className="header">
            <div className="headerDesc">
                <Typography variant="h6">uma seleção de produtos</Typography>
                <Typography variant="h4">especial para você</Typography>
                <Typography>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite</Typography>
            </div>
            <table className="btnContent">
                <tbody>
                    <tr>
                        <td><Button variant="contained">Conheça a Linx</Button></td>
                        <td><Button variant="contained">Ajude o algoritomo</Button></td>
                        <td><Button variant="contained">Seus produtos</Button></td>
                        <td><Button variant="contained">Compartilhe</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
