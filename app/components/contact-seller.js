import Ember from 'ember';

export default Ember.Component.extend({
  showContact:false,
  model(){
    return {
      greeting:'Hello'
    }
  },
  session: Ember.inject.service(),

  actions:{
    sendMessage: function(receiver, title, message){
      Ember.$.ajax({
        url:'https://q3api.herokuapp.com/',
        method:'post',
        data:{
          sender_id:this.get('session').isAuth,
          receiver_id:receiver,
          message_title:title,
          message_body:body
        }
      }).then( () => {
        console.log('Message sent.');
        //Clear the dialogue.
      });
    },

    test(){
      this.set('showContact', true);
    },

    close(){
      this.set('showContact', false);
    }


  }
});
