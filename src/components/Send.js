import React from 'react';
import { Typography, Button } from '@material-ui/core';
import {SendStyles} from '../styles/styles';
import TextField from '@material-ui/core/TextField';
import '../styles/styles.css'

export default function Send() {
    const styles = SendStyles()
    return (
        <div>
            <div className="text">
                <Typography>Compartilhe esta novidade</Typography>
                <Typography>Quer se seus amigos também ganhem a lista personalizalada deles? Prencha agora!</Typography>
            </div>
            <div>
                <table className="container">
                    <tbody>
                        <tr>
                            <td> 
                                <TextField
                                    id="outlined-name"
                                    label="Nome"
                                    className={styles.textField}
                                    // value={values.name}
                                    // onChange={handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder=""
                                />
                            </td>
                            <td> 
                                <TextField
                                    id="outlined-email-input"
                                    label="E-mail"
                                    className={styles.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.btnSend}><Button variant='outlined'>{"Enviar agora"}</Button></div>
            </div>
        </div>
    );
}
