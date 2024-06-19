import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/buttons/Button'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { authState } from '../states'
import { useWeb3Modal } from '@web3modal/react'
import { loginApi } from '../api/authAPIs'

export default function Auth() {
    const router = useRouter()
    const setAuth = useSetRecoilState(authState)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (!username) {
            alert('gotta have that username')
        }
        else if (!password) {
            alert('no password')
        }
        else {
            // TODO authenticate on server
            loginApi(username, password)
                .then(({ data }) => {
                    
                });
        }
    }

    return (
        <div className="h-screen w-screen grid grid-row-1 grid-col-1">
            <div className="place-self-center">
                <div className='flex justify-center'>
                    <div className="text-3xl font-semibold select-none mb-8">G R I F F I N</div>
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="username"
                        className="w-96 p-2 rounded bg-stone-100"
                        value={username}
                        onChange={({ target }) => { setUsername(target.value) }}
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="password"
                        className="w-96 p-2 rounded bg-stone-100"
                        value={password}
                        onChange={({ target }) => { setPassword(target.value) }}
                    />
                </div>
                <div className='flex justify-center'>
                    <Button
                        label="Login"
                        onClickHandler={handleLogin}
                    />
                </div>
            </div>
        </div>
    )
}