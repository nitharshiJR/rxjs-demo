RxJs is a library in js. use to handle async data.
RxJs use to appevents, Http reqs
# Rxjs main
   observable-special data structure
   send multiple values over time not a same time
   every time a new data update
# why use RxJs in angular
    handle async http reqs
    manage click,scrolls
    form changes track in reactive form
    give communication methods for components

 # why use observable
   *mutiple emitions(send)
   *lazy execution- if your wish you can subscribe and start 
   *cancelation-if you want you can stop data then resources can save.

   # RxJs concepts
   1. cold vs hot observable
      cold observable - if we give subscription then it will start otherwise its cant start.
      Hot observable -  automatically start to send data.even we dont give subscription to start
   2. multicasting
       ex: live tv everyone see same show
   3. operators/functions
        modify data stream (stream is data flow)
           map - transform data
           filter - filter data
           merge - combine two streams
   *without promisses we can using call back. but callback is look messy
   *promise returns one value then stops.
   *observable can return multiple values over time and can be cancelled.its used for http calls,user input events, timers, intervals
