import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import "./Timeline.css";

export default function PacinoTimeline() {
  return (
    <div className="timeline-section">
      <h2>Carreira</h2>

      <Timeline position="right">

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            Al Pacino começou sua carreira no teatro em Nova York, estudando no Actors Studio e se destacando em peças off-Broadway. Seu talento intenso e estilo único rapidamente chamaram atenção no meio artístico. (anos 60)
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            Seu papel como Michael Corleone em The Godfather transformou sua carreira. Inicialmente subestimado para o papel, Pacino entregou uma atuação icônica que o tornou uma estrela mundial.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            Durante esse período, estrelou clássicos como Scarface, Scent of a Woman e Heat. Em 1993, ganhou o Oscar de Melhor Ator por sua atuação em Scent of a Woman, consolidando seu status como lenda do cinema.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
          </TimelineSeparator>
          <TimelineContent className="timeline-text">
            Mesmo após décadas de carreira, Pacino continua atuando em grandes produções, incluindo The Irishman. Seu legado permanece como um dos maiores atores da história do cinema.
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </div>
  );
}