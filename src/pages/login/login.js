import '../../css/login.css';
import React from 'react';
import {useForm } from'react-hook-form';
import axios from 'axios';
import Cookies from 'universal-cookie';
function Login() {

    const {register, handleSubmit} = useForm();
    const cookies = new Cookies();
    let url = 'http://localhost:3001/users';

    async function conexionDb(db) {
        await axios.get(url, {params:{user: db.user, password: db.password}})
        .then(response =>{
            return response.data;
        })
        .then(response=>{
            if (response.length===1) {
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path:'/'});
                cookies.set('user', respuesta.user, {path:'/'});
                cookies.set('name', respuesta.name, {path:'/'});
                alert(`Bienvenido  ${respuesta.name}`)
                window.location.href="./home";
            }else{
                alert('El usuario o la contraseña no son correctos')
            }
        })
        .catch(error =>{console.log(error)})
        
    }
    if(cookies.get('id')){
        window.location.href="./home";
    }

    return ( 
        <div className="login">
            <div className="contPubli">
            </div>
            <div className='contForm'>
                <div className='form'>
                    <div className='headerForm'>
                        <div className='logoCont'>
                        
                        </div>
                    </div>
                    <div className='bodyForm'>
                        <form className='formInput' onSubmit={ handleSubmit(conexionDb)}>
                            <div className='inputUser'>
                                <p>User</p>
                                <input type="text" {...register('user',{required:true})} />
                            </div>
                            <div className='inputPassword'>
                                <p>Password</p>
                                <input type="password" {...register('password',{required:true})} />
                            </div>
                            <div className='inputButton'>
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className='footerForm'>
                        <div className='forgetPassword'>
                            <a href="/">ForgetPassword</a>
                        </div>
                        <div className='register'>
                            <a href="/">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;