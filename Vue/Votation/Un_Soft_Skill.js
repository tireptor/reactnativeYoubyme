import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Un_Soft_Skill extends React.Component {
  static navigationOptions = { title: 'UnSoftSkill', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      voteEnCours: false,
      isLoaded: false,
      items: [],
      checked: false,
    };
  }

  ajoutPoint = (idSoftSkill, idPersonneVote, idUser, idPeriode) => {
    fetch("http://192.168.43.206:1337/vote/voteUser" , {
      method: 'POST',
      headers: {
      Authorization: 'tokenHere',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      idPeriode: idPeriode,
      idPersVotant: idUser,
      idPersVote: idPersonneVote,
      idSoftSkill: idSoftSkill,
      }),
    }) 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            checked: true
          }
          );
          userVoteItems = 1 
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    this.props.VoteUserItems()
    console.log("Ajout, id softSkill : " + idSoftSkill + " ID personne voté : " + idPersonneVote + " ID user: " + idUser + " ID periode: " + idPeriode);  
  }

  retirePoint = () => {
    this.setState({
      checked: false
    })
  }

  render() {
    if(this.state.checked)
    {
      return (
        <View  style={styles.container}>
          <Text style={styles.text}>{this.props.nom_t_personne}</Text>
          <View  style={styles.otherContainer}>
            <TouchableOpacity style={styles.touchable} onPress={() => this.retirePoint(this.props.id_soft_skill, this.props.id_personne_vote, this.props.id_user, this.props.id_periode)}>            
              <Text style={styles.buttonChecked}>+</Text>                    
            </TouchableOpacity>
          </View>                    
        </View>
      );
    }
    else
    {
      return (
        <View  style={styles.container}>
          <Text style={styles.text}>{this.props.nom_t_personne}</Text>
          <View  style={styles.otherContainer}>
            <TouchableOpacity style={styles.touchable} onPress={() => this.ajoutPoint(this.props.id_soft_skill, this.props.id_personne_vote, this.props.id_user, this.props.id_periode)}>            
              <Text style={styles.button}>+</Text>                    
            </TouchableOpacity>
          </View>                    
        </View>
      );
    }
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  otherContainer: {
    flexDirection: 'row'
  },
  touchable: {
      height: '70%',
      width: '40%',
      justifyContent: 'center',
      backgroundColor: 'red',
  },
  text : {
    textAlign: 'center',
    width: '100%',
    margin: 10
  },
  button: {
    width: 50,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    lineHeight:35,
    fontSize:20,
  },
  buttonChecked: {
    width: 50,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    lineHeight:35,
    fontSize:20,
    backgroundColor: 'green'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

