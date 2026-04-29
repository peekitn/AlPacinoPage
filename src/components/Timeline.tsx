{/* ver de colocar imagem no lado dos textos, sepa ne em, ano esquece de criar um quiz.tsx */}
import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";

import "../styles/Timeline.css";

{/* isMobile começa como falso */}
export default function CustomTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    {/* aqui é verificado se a largura é menor q 768 */}
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); {/* roda uma vez logo ao montar o componente */}
    window.addEventListener("resize", handleResize); {/* Toda vez que muda de tamanho, atualiza o estado */}

    return () => window.removeEventListener("resize", handleResize); {/* evita vazamento de memória quando o estado desmonta */}
  }, []);

  return (
    <div className="timeline-section" id="timeline">
      <h2>Timeline</h2>

      <Timeline position={isMobile ? "right" : "alternate-reverse"}> {/* se for mobile, a posição vai pra direita, caso contrario, alternate - reverse */}
        
        <TimelineItem>
          <TimelineSeparator>
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            Al Pacino nasceu em Nova York, filho de imigrantes italianos, e cresceu no Bronx após a separação dos pais. Na adolescência, queria ser jogador de beisebol, mas acabou se interessando por atuação. Abandonou a escola aos 17 anos e passou por dificuldades financeiras, trabalhando em empregos simples enquanto estudava teatro. Teve uma juventude problemática, com envolvimento em brigas e contato precoce com álcool e drogas leves. Enfrentou rejeições no início da carreira e chegou a ficar sem-teto, mas encontrou apoio no estúdio HB e em seu mentor Charlie Laughton. Sua vida foi marcada por perdas pessoais importantes, como a morte de sua mãe e de seu avô no início dos anos 1960.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            No fim dos anos 1960, Al Pacino estudou com Lee Strasberg, usando a atuação como forma de superar uma juventude difícil e sem dinheiro. Ganhou destaque no teatro ao vencer um Obie Award por The Indian Wants the Bronx e um Tony Award por Does the Tiger Wear a Necktie?. Estreou no cinema com Me Natalie (1969), mas foi em The Panic in Needle Park (1971) que chamou a atenção do diretor Francis Ford Coppola. Depois disso, continuou no teatro e também se dedicou à direção, com trabalhos como Looking for Richard e Chinese Coffee, que foram bem recebidos.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            A consagração de Al Pacino veio com o papel de Michael Corleone em The Godfather, dirigido por Francis Ford Coppola, mesmo sendo pouco conhecido na época. O sucesso lhe rendeu uma indicação ao Oscar e abriu caminho para mais nomeações ao longo dos anos 1970, incluindo por The Godfather Part II.

Apesar do reconhecimento constante, só venceu o Oscar em 1993 com Scent of a Woman, quando também recebeu outra indicação por Glengarry Glen Ross, feito raro que só seria repetido depois por Jamie Foxx.

Nos anos 1980, sua carreira teve uma queda, com críticas negativas a alguns filmes, embora Scarface tenha se tornado marcante. Após o fracasso de Revolution, ele voltou ao teatro por alguns anos. Retornou ao cinema no fim da década com Sea of Love e recuperou o prestígio nos anos seguintes com filmes como Carlito’s Way, Heat, Donnie Brasco e The Recruit.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            Al Pacino nunca se casou, mas tem quatro filhos: Julie Marie (com Jan Tarrant), os gêmeos Anton James e Olivia Rose (com Beverly D'Angelo) e Roman (com Noor Alfallah).

Ao longo da vida, teve vários relacionamentos, incluindo com Diane Keaton — sua colega em The Godfather — além de outras atrizes como Tuesday Weld, Jill Clayburgh e Lucila Polak, com quem manteve um relacionamento longo.
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </div>
  );
}
{/* AAAAlternating Timeline: https://mui.com/material-ui/react-timeline/ */}