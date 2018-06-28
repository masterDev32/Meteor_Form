import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Link, Router, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Clients } from '../../lib/collection';
//style
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

//get Data
const datas = Clients.find({});
class Liste extends React.Component {
  constructor(props) {
    super(props);
    console.log(datas);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Prénom</TableCell>
                <TableCell numeric>Nom</TableCell>
                <TableCell numeric>Email</TableCell>
                <TableCell numeric>Téléphone</TableCell>
                <TableCell numeric>Adresse</TableCell>
                <TableCell numeric>Ville</TableCell>
                <TableCell numeric>Province</TableCell>
                <TableCell numeric>Code Postal</TableCell>
                <TableCell numeric>Pays</TableCell>
                <TableCell numeric>Commentaire</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {//verifier si l'utilisateur c'est connectez.
              Meteor.user()
                ? datas.map(client => {
                    return (
                      <TableRow key={client._id}>
                        <TableCell component="th" scope="row">
                          {client.prenom}
                        </TableCell>
                        <TableCell numeric>{client.nom}</TableCell>
                        <TableCell numeric>{client.email}</TableCell>
                        <TableCell numeric>{client.telephone}</TableCell>
                        <TableCell numeric>{client.adresse}</TableCell>
                        <TableCell numeric>{client.ville}</TableCell>
                        <TableCell numeric>{client.province}</TableCell>
                        <TableCell numeric>{client.codePostal}</TableCell>
                        <TableCell numeric>{client.pays}</TableCell>
                        <TableCell numeric>{client.commentaires}</TableCell>
                      </TableRow>
                    );
                  })
                : alert('Veuillez vous connectez.')}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Liste);
