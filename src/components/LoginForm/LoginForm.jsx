import { useForm } from "react-hook-form";
import { useAuth } from "../../provider/AuthProvider";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const {LoginData, setLoginData} = useAuth();

  const onSubmit = async (formData) => {
    const url = "http://localhost:3000/api/auth/login";
    try {
      const result = await fetch(url, {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      })

      if (result.ok) {
        const Token = await result.json()
        sessionStorage.setItem('access_Token', JSON.stringify(Token))
        setLoginData(Token)
      } else {
        throw new Error('login fejl')
      }

    } catch (error) {
      console.error("forkert email eller adgangskode")
    }
  }

  const LogOut = () => {
    sessionStorage.removeItem('access_Token')
    setLoginData(null)
  }

  return (
    <>
    {!LoginData ? (
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username"> brugernavn </label>
        <input autoComplete="username" {...register('username', {required: true})} />
        {errors.username && <span>brugernavn skal værer udfylt</span>}
      </div>
      <div>
        <label htmlFor="password">adganskode</label>
        <input type="password" autoComplete="current-password" {...register('password', {required: true})} />
        {errors.password && <span>adgangskode skal værer udfylt</span>}
      </div>
      <button>send</button>
      </form>
    ) : (
      <div>
        <p>Du er logget ind som {`${LoginData.user.name}`}</p>
        <button onClick={() => LogOut()}>Log out</button>
      </div>
    )}
    </>
  );
}
