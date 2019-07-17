import '../sass/main.scss';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
  input:()=>({
    height: '50px',
    maxWidth: '20px',
  })
}

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container text-center">
      <form onSubmit={this.handleSubmit}>
        <label>
          Completa los datos para obtener el precio del vehículo
          <Select placeholder="Selecciona la marca" components={makeAnimated()} options={options} styles={customStyles} />
        </label>
        <button type="submit" className="btn-primary" value="Submit">Ver precio</button>
      </form>
      </div>
    );
  }
}