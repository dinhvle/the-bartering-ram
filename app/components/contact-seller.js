import Ember from 'ember';

export default Ember.Component.extend({
  showContact:false,
  model(){
    return {
      username:this.get('session').username
    }
  },
  session: Ember.inject.service(),

  actions:{
    sendMessage: function(receiver, title, message){
      Ember.$.ajax({
        url:'https://q3api.herokuapp.com/api/v1/messages',
        method:'post',
        data:{
          sender_id:this.get('session').user_id,
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
