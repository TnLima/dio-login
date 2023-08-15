import { useForm } from "react-hook-form";
// import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import netBkg from '../../assets/netflix-bg.jpg'

import { Container, LoginContainer, Column, Spacing, Title, CustomDiv } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  }); 

  console.log(isValid)  

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title className="Title">Entrar</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          {/* <Button disabled={!isValid} title="Entrar" /> */}
          <CustomDiv>
            <button type="button" hidden={!isValid} className="customButton">
              Entrar
            </button>
          </CustomDiv>

          <div className="lembraAjuda">
            <div className="">
              <input type="checkbox" />
              <label> Lembre-se de mim</label>
            </div>

            <p>Precisa de ajuda?</p>
          </div>

          <div className="assineAgora">
            <p>
              Novo por aqui?{" "}
              <a className="linkAssine" href="/">
                Assine agora.
              </a>
            </p>
            <p className="reCaptcha">
              Esta página é protegida pelo Google reCAPTCHA para garantir que
              você não é um robô.{" "}
              <a className="linkSaiba" href="/">
                Saiba mais.
              </a>
            </p>
          </div>
        </Column>
      </LoginContainer>
      <img src={netBkg} alt="" className="background"/>
    </Container>
  );
};

export default Login;
