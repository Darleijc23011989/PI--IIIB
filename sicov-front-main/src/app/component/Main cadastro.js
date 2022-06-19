import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import CircularProgress from "@mui/material/CircularProgress";
import { getVaccinesByCriteria } from "../service/vaccine";
import FormItem from "./FormItem";
import FormGrid from "./FormGrid";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getStates } from "../service/states";

function Main() {

    const [isLoading, setIsLoading] = useState(true);
    const [vaccine, setVaccine] = useState('');
    const [age, setAge] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [comorbidity, setComorbidity] = useState(false);
    const [riskGroup, setRiskGroup] = useState(false);

    const [vaccines, setVaccines] = useState([]);
    const [states, setStates] = useState([]);

    useEffect(() => {
        async function fetchVaccines() {
            setIsLoading(true);
            getVaccinesByCriteria({ dummy: 'criteria' }).then(resVaccines => {
                setVaccines(resVaccines);
                setIsLoading(false);
            });
        }
        async function fetchStates() {
            setIsLoading(true);
            getStates().then(resStates => {
                setStates(resStates);
                setIsLoading(false);
            });
        }
        fetchVaccines();
        fetchStates();
    }, [])

    return isLoading ? (<CircularProgress />) : (
        <div className="Main">
            <TopBar title="Cadastro para receber aviso sobre Vacinas" />
            <FormGrid>
                <FormItem>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                        label="Data de Nascimento"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                        label="Estado"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                        label="Municipio"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
               
                <FormItem sx={{textAlign: 'center'}}>
                    <FormControl sx={{textAlign: 'center'}}>
                        <Button variant="contained" color="success" endIcon={<ArrowForwardIcon />}>
                            CADASTRAR
                        </Button>
                    </FormControl>
                </FormItem>
            </FormGrid>
        </div>
    )

}

export default Main;