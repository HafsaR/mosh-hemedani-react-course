import { useState } from "react";
import ExpansableText from "./components/ExpansableText";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExpansableText
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quisquam iste
      eius qui ea! Nostrum facilis obcaecati explicabo fugiat. Aliquid omnis
      dicta, quibusdam ratione officiis magnam obcaecati neque porro. Obcaecati
      distinctio maxime quia vero fugit voluptas minima repudiandae ipsum? Velit
      explicabo sint accusamus expedita, illum fugiat atque libero, a eligendi
      maxime dignissimos nemo id. Reprehenderit suscipit voluptate ex autem
      distinctio facilis ut fuga quis pariatur laudantium magni tenetur optio
      molestiae nihil debitis labore aliquid iure illum consectetur delectus,
      dignissimos nemo veritatis! Magnam tenetur nulla inventore delectus
      consequuntur similique odit deserunt doloremque quos. Ipsam cum veritatis
      dignissimos pariatur eligendi aperiam expedita.
    </ExpansableText>
  );
}

export default App;
