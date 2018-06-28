import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Btnlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
      password: ''
    };

    this.Open = () => {
      this.setState({ open: true });
    };

    this.Close = () => {
      this.setState({ open: false });
    };

    //bind funcs
    this.login = this.login.bind(this);
    this.canceled = this.canceled.bind(this);
    this.send = this.send.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  //function permet d'ouvrire la fenetre de login.
  login(event) {
    console.log('log');
    this.Open();
  }
  //func permet de fermer la fenetre login.
  canceled(event) {
    console.log('canceled');
    this.Close();
  }
  //func pour recuperer la valeur du champ email.
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  //func pour recuperer la valeur du champ password.
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  //func envoie le valeur de champs du form.
  send(event) {
    //console.log(this.state.email);
    //console.log(this.state.password);
    console.log('send');
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.login}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.Close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>Inscrivez vos identifiants.</DialogContentText>
            <TextField
              onChange={this.emailChange}
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={this.state.email}
            />
            <TextField
              onChange={this.passwordChange}
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={this.state.password}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.canceled} color="primary">
              Annuler
            </Button>
            <Button onClick={this.send} color="primary">
              Envoyer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default Btnlogin;
