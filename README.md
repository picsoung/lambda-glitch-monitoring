# Glitch Monitoring

Lambda function built using [Serverless Framework](http://serverless.com) to monitor open questions on Glitch.

## How to use it

In `serverless.yml` change `VERIFICATION_TOKEN` variable to your own random string. This will be used to verify in the glitch app that the request is coming from this Lambda function.

Change `GLITCH_APP` to your own app URL. The app needs to have a POST endpoint available on `/questions/hook`.


Read blog post [here](https://dev.to/picsoung/get-better-at-programming-by-helping-others-on-glitch-e3a-temp-slug-9610427?preview=f0c4cc72ce1a925efb453fadab76859a628bdf381eec4e95765c70c216bd4da1c628907e9210c29d2a0bc0d90ba1ff1e14b590f4e2eadd1ac3bd2c63)
