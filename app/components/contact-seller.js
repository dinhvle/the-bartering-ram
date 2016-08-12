import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return {
      greeting:'Hello'
    }
  },
  session: Ember.inject.service(),

  actions:{
    sendMessage: function(receiver, title, message){
      Ember.$.ajax({
        url:'http://127.0.0.1:3000',
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
    }
  }
});
