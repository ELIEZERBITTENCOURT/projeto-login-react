import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registre-se</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome" />
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control" placeholder="Sobrenome" />
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="Coloque seu e-mail" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Coloque sua senha" />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">Registrar</button>
                <p className="forgot-password text-right">
                 <a href="#">Já registrado?</a>
                </p>
            </form>
        );
    }
}