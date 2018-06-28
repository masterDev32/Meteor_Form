import React from 'react';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Clients } from '../../lib/collection';

//style
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '600px',
    margin: '5px auto'
  },
  textField: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    height: '50px',
    width: '100vw'
  },
  button: {
    margin: theme.spacing.unit,
    align: 'center',
    marginLeft: theme.spacing.unit * 33
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log('formulaire');
    this.state = {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      adresse: '',
      ville: '',
      province: '',
      codePostal: '',
      pays: '',
      commentaires: ''
    };

    this.prenomChange = this.prenomChange.bind(this);
    this.nomChange = this.nomChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.telephoneChange = this.telephoneChange.bind(this);
    this.adresseChange = this.adresseChange.bind(this);
    this.villeChange = this.villeChange.bind(this);
    this.provinceChange = this.provinceChange.bind(this);
    this.codePostalChange = this.codePostalChange.bind(this);
    this.paysChange = this.paysChange.bind(this);
    this.commentaireChange = this.commentaireChange.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  prenomChange(event) {
    this.setState({ prenom: event.target.value });
  }
  nomChange(event) {
    this.setState({ nom: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  telephoneChange(event) {
    this.setState({ telephone: event.target.value });
  }
  adresseChange(event) {
    this.setState({ adresse: event.target.value });
  }
  villeChange(event) {
    this.setState({ ville: event.target.value });
  }
  provinceChange(event) {
    this.setState({ province: event.target.value });
  }
  codePostalChange(event) {
    this.setState({ codePostal: event.target.value });
  }
  paysChange(event) {
    this.setState({ pays: event.target.value });
  }
  commentaireChange(event) {
    this.setState({ commentaires: event.target.value });
  }
  Submit(event) {
    event.preventDefault();
    //inserer dans la DB.
    Clients.insert({
      prenom: this.state.prenom,
      nom: this.state.nom,
      email: this.state.email,
      telephone: this.state.telephone,
      adresse: this.state.adresse,
      ville: this.state.ville,
      province: this.state.province,
      codePostal: this.state.codePostal,
      pays: this.state.pays,
      commentaires: this.state.commentaires
    });
    //clean le formulaire
    this.setState({ prenom: '' });
    this.setState({ nom: '' });
    this.setState({ email: '' });
    this.setState({ telephone: '' });
    this.setState({ adresse: '' });
    this.setState({ ville: '' });
    this.setState({ province: '' });
    this.setState({ codePostal: '' });
    this.setState({ pays: '' });
    this.setState({ commentaire: '' });

    //show dans la console.
    alert('le formulaire a été envoié. Merci');
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} onSubmit={this.Submit}>
          <TextField
            type="text"
            placeholder="Prénom"
            autoFocus
            margin="dense"
            className={classes.textField}
            value={this.state.prenom}
            onChange={this.prenomChange}
            required
          />
          <TextField
            type="text"
            placeholder="Nom"
            className={classes.textField}
            value={this.state.nom}
            onChange={this.nomChange}
            required
          />
          <TextField
            type="text"
            placeholder="Adresse courriel"
            className={classes.textField}
            value={this.state.email}
            onChange={this.emailChange}
            required
          />
          <TextField
            type="text"
            placeholder="Téléphone"
            className={classes.textField}
            value={this.state.telephone}
            onChange={this.telephoneChange}
            required
          />
          <TextField
            type="text"
            placeholder="Adresse"
            className={classes.textField}
            value={this.state.adresse}
            onChange={this.adresseChange}
            required
          />
          <TextField
            type="text"
            placeholder="Ville"
            className={classes.textField}
            value={this.state.ville}
            onChange={this.villeChange}
            required
          />
          <TextField
            type="text"
            placeholder="Province"
            className={classes.textField}
            value={this.state.province}
            onChange={this.provinceChange}
            required
          />
          <TextField
            type="text"
            placeholder="Code postal"
            className={classes.textField}
            value={this.state.codePostal}
            onChange={this.codePostalChange}
            required
          />
          <TextField
            type="text"
            placeholder="Pays"
            className={classes.textField}
            value={this.state.pays}
            onChange={this.paysChange}
            required
          />
          <TextField
            type="text"
            placeholder="Commentaire"
            multiline
            rowsMax="6"
            className={classes.textField}
            margin="normal"
            value={this.state.commentaires}
            onChange={this.commentaireChange}
            required
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            value="Post"
          >
            Envoyer
          </Button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(Form);
