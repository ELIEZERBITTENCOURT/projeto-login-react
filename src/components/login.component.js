import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Login</h3>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="Coloque seu e-mail" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Coloque sua senha" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lembre-me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    <a href="#"> Esqueceu sua senha?</a>
                </p>
            </form>
        );
    }
}