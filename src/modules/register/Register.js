import { useRegister } from "./useRegister";

function Register() {
  const {
    error,
    firstName,
    lastName,
    email,
    password,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    handleRegister,
    validEmail,
    validPwd,
    validMatch
  } = useRegister();

  return (
    <div>
      <p>{error}</p>
      <h1>Doesn't have an account?</h1>
      <p>Fill up the necessary details to register!</p>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Firstname"
        />
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Lastname"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button color="danger">Register</button>
      </form>
    </div>
  );
}

export default Register;
