import '../sass/main.scss';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AllBrandsQuery, GroupsQuery, ModelsQuery, YearsQuery } from '../queries/tauto.queries';
import { prepareArraySelect, thousands } from '../helpers';

const customTheme=(theme)=>({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#F0F2F5',
    primary: 'black',
  },
})
const customStyles = {
  container: (base) => ({
    ...base,
    textAlign: 'center',
    width: '250px'
  }),
  input: (base) => ({
    ...base,
  }),
  valueContainer: (base) => ({
    ...base,
    minHeight: '50px',
  }),
  control: (base) => ({
    ...base,
    borderRadius: '0px',
    maxWidth: '250px',
  }),
  menu: (base)=>({
    ...base,
    borderRadius:'0px',
  })
}

export default class PricesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: '', group: '', model:'', year: '', price: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  client = new ApolloClient({
    uri: "https://api.miautohoy.com/graphql"
  });
  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <div className="container text-center form-container">
          <Query
            query={AllBrandsQuery}
          >
            {({ loading, error, data }) => {
              if (error) return <p>Error :(</p>;

              return <form onSubmit={this.handleSubmit}>
                <label className="mb-4 text-white">
                  Completa los datos para obtener el precio del vehículo.
                  </label>
                <div className="d-flex justify-content-center">
                  <Select
                    onChange={({ value }) => this.handleChange('brand', value)}
                    placeholder="Selecciona la marca"
                    isLoading={loading}
                    theme={customTheme}
                    components={makeAnimated()}
                    options={prepareArraySelect(data.AllBrands, 'ta3_nmarc', 'ta3_marca')} styles={customStyles} />
                </div>
                <Query query={GroupsQuery} skip={!this.state.brand} variables={{ gru_nmarc: this.state.brand }}>
                  {({ loading, error, data }) => {
                    if (error) return <p>Error :(</p>;
                    return <div className="d-flex justify-content-center mt-4">
                      <Select
                        onChange={({ value }) => this.handleChange('group', value)}
                        placeholder="Selecciona el grupo"
                        isLoading={loading}
                        theme={customTheme}
                        components={makeAnimated()}
                        options={data ? prepareArraySelect(data.Group, 'gru_cgrup', 'gru_ngrup') : []} styles={customStyles} />
                    </div>
                  }}
                </Query>
                <Query query={ModelsQuery} skip={!this.state.group} variables={{ ta3_nmarc: this.state.brand, ta3_cgrup: this.state.group }}>
                  {({ loading, error, data }) => {
                    if (error) return <p>Error :(</p>;
                    return <div className="d-flex justify-content-center mt-4">
                      <Select
                        onChange={({ value }) => this.handleChange('model', value)}
                        placeholder="Selecciona el Modelo"
                        components={makeAnimated()}
                        isLoading={loading}
                        theme={customTheme}
                        options={data ? prepareArraySelect(data.Models, 'ta3_codia', 'ta3_model') : []} styles={customStyles} />
                    </div>
                  }}
                </Query>
                <Query query={YearsQuery} skip={!this.state.model} variables={{ ta3_codia: this.state.model }}>
                  {({ loading, error, data }) => {
                    console.log(data);
                    if (error) return <p>Error :(</p>;
                    return <div className="d-flex justify-content-center mt-4">
                      <Select
                        onChange={({ value }) => this.handleChange('price', value)}
                        placeholder="Selecciona el Año"
                        components={makeAnimated()}
                        isLoading={loading}
                        theme={customTheme}
                        options={data ? prepareArraySelect(data.Price, 'precio', 'anio') : []} styles={customStyles} />
                    </div>
                  }}
                </Query>
                  {this.state.price!== '' &&<h2 className="text-white mt-5">{`Precio sugerido: $${thousands(this.state.price)}`}</h2>}
              </form>
            }}
          </Query>
        </div>
      </ApolloProvider>

    );
  }
}