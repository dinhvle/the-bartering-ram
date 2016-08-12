import Ember from 'ember';

export default Ember.Component.extend({
  showContact:false,
  model(){
    return {
      username:this.get('session').username,
      sender:this.get('session').user_id
    }
  },
  session: Ember.inject.service(),

  actions:{
    sendMessage: function(sender, receiver, title, body){
      console.log(this.get('session').user_id);
      Ember.$.ajax({
        url:'https://q3api.herokuapp.com/api/v1/messages',
        method:'POST',
        data:{
          sender_id:sender,
          receiver_id:receiver,
          message_title:title,
          message_body:body
        }
      }).then( () => {
        this.set('showContact', false);
      });
    },

    open(){
      this.set('showContact', true);
    },

    close(){
      this.set('showContact', false);
    }


  }
});
