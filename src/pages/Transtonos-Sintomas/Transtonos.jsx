import React from "react";
import { useNavigate } from 'react-router-dom';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-transtornos';
import { Introducao, Title } from './components/main-transtornos';
import { Main, Estresse, DivEstresse, TitleEstresse, Container, ContainerEstresse,  ListaEstresse, ImagemEstresse } from './components/main-transtornos';
import { FooterTem } from './components/footer-transtorno';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import Imagem1 from "../../assets/imgTranstornos/foto1.svg"
import Imagem2 from "../../assets/imgTranstornos/foto2.svg"
import Imagem3 from "../../assets/imgTranstornos/foto3.svg"
import Imagem4 from "../../assets/imgTranstornos/foto4.svg"
import Imagem5 from "../../assets/imgTranstornos/foto5.svg"
import Imagem6 from "../../assets/imgTranstornos/foto6.svg"
import Imagem7 from "../../assets/imgTranstornos/foto7.svg"
import Imagem8 from "../../assets/imgTranstornos/foto8.svg"

export default function Transtonos() {
    const navigate = useNavigate();

    function goBackPage() {
        navigate('/');
    }

    return (
        <>
            <Header>
                <ImagemLogo src={LogoOASIS} alt="Logo" />
                <NavHeader>
                    <NavLink onClick={goBackPage}>Home</NavLink>
                    <NavLink href="#login">Login</NavLink>
                    <NavLink href="#register">Cadastrar</NavLink>
                </NavHeader>
            </Header>

            <Main>

                <Introducao>
                    <Title>Explorando a Complexidade da Saúde Mental: Conheça os Diversos Transtornos e Sintomas</Title>
                </Introducao>

                <Container>

                    <Estresse>
                        <TitleEstresse>Estresse no Dia a Dia</TitleEstresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <ListaEstresse>Dificuldade em concentrar-se nas tarefas.</ListaEstresse>
                                <ListaEstresse>Tensão muscular persistente, como dores nas costas ou no pescoço.</ListaEstresse>
                                <ListaEstresse>Mudanças no apetite, como comer em excesso ou falta de apetite.</ListaEstresse>
                                <ListaEstresse>Desânimo constante, falta de motivação para realizar atividades do dia a dia.</ListaEstresse>
                                <ListaEstresse>Problemas digestivos, como azia, refluxo ou síndrome do intestino irritável.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem1} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>

                        <DivEstresse>
                            <ImagemEstresse src={Imagem2} />
                            <ContainerEstresse>
                                <TitleEstresse>Ansiedade</TitleEstresse>
                                <ListaEstresse>Preocupações excessivas com eventos futuros, mesmo os de pequena importância.</ListaEstresse>
                                <ListaEstresse>Sensação de nervosismo ou apreensão constante.</ListaEstresse>
                                <ListaEstresse>Medo irracional de situações específicas, como viajar de avião ou falar em público.</ListaEstresse>
                                <ListaEstresse>Insônia ou dificuldade em dormir devido a pensamentos ansiosos.</ListaEstresse>
                                <ListaEstresse>Sintomas físicos, como palpitações cardíacas, sudorese excessiva ou tremores.</ListaEstresse>
                            </ContainerEstresse>
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <TitleEstresse>Depressão</TitleEstresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <ListaEstresse>Sentimentos de desesperança ou vazio persistente.</ListaEstresse>
                                <ListaEstresse>Perda de interesse em atividades que antes eram prazerosas.</ListaEstresse>
                                <ListaEstresse>Alterações no peso ou apetite, como ganho ou perda significativa de peso sem motivo aparente.</ListaEstresse>
                                <ListaEstresse>Fadiga extrema ou falta de energia, mesmo após um bom sono.</ListaEstresse>
                                <ListaEstresse>Dificuldade em se concentrar ou tomar decisões simples.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem3} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <TitleEstresse>Solidão e Isolamento Social</TitleEstresse>
                        <DivEstresse>
                            <ImagemEstresse src={Imagem4} />
                            <ContainerEstresse>
                                <ListaEstresse>Sensação de desconexão ou distanciamento dos outros, mesmo quando cercado por pessoas..</ListaEstresse>
                                <ListaEstresse>Falta de interesse em fazer planos sociais ou participar de atividades em grupo.</ListaEstresse>
                                <ListaEstresse>Sentimento de vazio emocional, mesmo em situações sociais.</ListaEstresse>
                                <ListaEstresse>Dificuldade em iniciar ou manter relacionamentos significativos.</ListaEstresse>
                                <ListaEstresse>Impacto na autoestima e autoconfiança devido à falta de interação social.</ListaEstresse>
                            </ContainerEstresse>
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <TitleEstresse>Transtorno Obsessivo-Compulsivo (TOC)</TitleEstresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <ListaEstresse>Pensamentos obsessivos persistentes e indesejados, como preocupações com germes, segurança ou ordem.</ListaEstresse>
                                <ListaEstresse>Comportamentos compulsivos repetitivos, como lavar as mãos, verificar constantemente as fechaduras das portas ou organizar itens de forma específica.</ListaEstresse>
                                <ListaEstresse>Sentimentos de ansiedade intensa ou desconforto quando os rituais compulsivos não são realizados.</ListaEstresse>
                                <ListaEstresse>Impacto significativo nas atividades diárias e relacionamentos devido ao TOC.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem5} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <TitleEstresse>Transtorno de Estresse Pós-Traumático (TEPT)</TitleEstresse>
                        <DivEstresse>
                            <ImagemEstresse src={Imagem6} />
                            <ContainerEstresse>
                                <ListaEstresse>Flashbacks perturbadores ou intrusivos de um evento traumático passado.</ListaEstresse>
                                <ListaEstresse>Pesadelos frequentes relacionados ao trauma.</ListaEstresse>
                                <ListaEstresse>Evitação de lugares, pessoas ou atividades que lembrem o evento traumático.</ListaEstresse>
                                <ListaEstresse>Hipervigilância ou sensação constante de perigo iminente.</ListaEstresse>
                                <ListaEstresse>Mudanças de humor, incluindo irritabilidade, raiva ou sentimentos de culpa.</ListaEstresse>
                            </ContainerEstresse>

                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <TitleEstresse>Transtorno Bipolar</TitleEstresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <ListaEstresse>Mudanças extremas de humor, incluindo períodos de mania, euforia ou hipomania seguidos por episódios de depressão.</ListaEstresse>
                                <ListaEstresse>Aumento da atividade ou energia durante os episódios de mania, como falar rápido demais, agitação ou comportamento impulsivo.</ListaEstresse>
                                <ListaEstresse>Baixa energia, fadiga e falta de motivação durante os episódios depressivos.</ListaEstresse>
                                <ListaEstresse>Flutuações no sono e no apetite.</ListaEstresse>
                                <ListaEstresse>Dificuldade em manter relacionamentos e manter um emprego estável.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem7} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <TitleEstresse>Transtorno de Personalidade Borderline (TPB)</TitleEstresse>
                        <DivEstresse>
                            <ImagemEstresse src={Imagem8} />
                            <ContainerEstresse>
                                <ListaEstresse>Instabilidade emocional intensa, incluindo mudanças rápidas de humor e sentimentos de vazio.</ListaEstresse>
                                <ListaEstresse>Relacionamentos instáveis ​​e intensos, caracterizados por idealização e desvalorização de outras pessoas.</ListaEstresse>
                                <ListaEstresse>Comportamentos impulsivos, como gastos excessivos, abuso de substâncias, comportamento sexual de risco ou autolesão.</ListaEstresse>
                                <ListaEstresse>Medo intenso de abandono e esforços frenéticos para evitar o abandono.</ListaEstresse>
                                <ListaEstresse>Alterações na autoimagem, autoimagem instável e sentimentos crônicos de vazio.</ListaEstresse>
                            </ContainerEstresse>
                        </DivEstresse>
                    </Estresse>

                </Container>

                <FooterTem />

            </Main>
        </>
    )
}