import { Title, OptionsBox, OptionsItem } from "./styles"
import Button from "../../components/Button"

function Home() {

    return (
        <div>
            <Title>pomodoro</Title>
            <OptionsBox>
                <OptionsItem>pomodoro</OptionsItem>
                <OptionsItem>short break</OptionsItem>
                <OptionsItem>long break</OptionsItem>
            </OptionsBox>

            
        </div>
    )
}

export default Home