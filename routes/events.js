
module.exports = {

  getNewEvent: function(req, res){
   res.render('newEvent.jade', { locals:
    { title: 'Create an Event!' }
   });
  },

  postNewEvent: function(req, res){
    db.saveEvent({
      name : req.param('eventname')
    , date : req.param('eventdate')
    , desc : req.param('eventdesc')
    }, function(err, docs) {
      res.redirect('/');
    });
  },

  getSetEvent: function(req, res){
    db.getEvents(function(err, events) {
      res.render('setEvent.jade', { locals:
        { title: 'Set my event'
        , currentEvents: events }
      });
      { title: 'Set my event' }
    });
  },

  postSetEvent: function(req, res){
    db.setEvent(req.param('eventid'), function(err) {
      res.redirect('/newNote');
    });
  },

  clearEvent: function(req, res){
    db.clearMyEvent(function(err) {
      console.log('event cleared!');
      res.redirect('/');
    });
  }

};
