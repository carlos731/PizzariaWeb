import { useState, FormEvent, useContext } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

import { AuthContext } from '../../contexts/AuthContext';

import Link from 'next/link';
import { toast } from 'react-toastify';

export default function SignUp() {
    const { signUp } = useContext(AuthContext);

    const [name, setName] = useState('');    
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleSignUp(event: FormEvent){
        event.preventDefault();

        if(name === '' || email === '' || password === ''){
            toast.warning("PREENCHA TODOS OS CAMPOS");
            return;
        }

        setLoading(true);

        let data = {
            name,
            email,
            password
        }

        await signUp(data);

        setLoading(false);
    }

    return (
        <>
            <Head>
                <title>Faça seu cadastro agora!</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

                <div className={styles.login}>
                    <h1>Criando sua conta</h1>

                    <form onSubmit={handleSignUp}>
                        <Input
                            placeholder="Digite seu nome"
                            type="text"
                            value={name}
                            onChange={ (e) => setName(e.target.value) }
                        />

                        <Input
                            placeholder="Digite seu email"
                            type="text"
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) }
                        />

                        <Input
                            placeholder="Sua senha"
                            type="password"
                            value={password}
                            onChange={ (e) => setPassword(e.target.value) }
                        />

                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Cadastrar
                        </Button>

                    </form>

                    <Link href="/" className={styles.text}>Já possui uma conta? Faça login</Link>

                    {/* Não funciona assim */}
                    {/* <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se.</a>
          </Link> */}

                </div>
            </div>
        </>
    );
}
