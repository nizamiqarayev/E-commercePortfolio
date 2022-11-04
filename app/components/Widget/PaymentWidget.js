import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import Button from '../UI/Button';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

const PaymentWidget = ({route}) => {
  console.log(route.params.email._j);
  //   useFocusEffect(() => {
  //     this.webref.injectJavaScript(pay());
  //   });

  const customHtml = `
    <!DOCTYPE html>
    <html>
  <head>
  <title>Font Awesome Icons</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>
    </head>
    <body>
    </body>
    <script>
    const pay = () => {
        var widget = new cp.CloudPayments();
        widget.pay(
          'charge', // or 'charge'
          {
            //options
            publicId: 'pk_a2636e94412550d124dbc41eb3544', //id of site (from back office)
            description: 'Payment example (no real withdrawal)', // purpose/justification/description
            amount: ${route.params.total},
            currency: 'USD',
            email: '${route.params.email._j}',
            accountId: '${route.params.userId._j}', //customer's/user's/payer's ID (optional)
            invoiceId: '1234567', // order number  (optional)
            skin: 'modern', // disign widget (optional)
            data: {
              myProp: 'myProp value', //arbitrary set of parameters
            },
          },
          {
            onSuccess: function (options) {
              // success
              //action upon successful payment
            },
            onFail: function (reason, options) {
              // fail
              //action upon unsuccessful payment
            },
            onComplete: function (paymentResult, options) {
              //It is called as soon as the widget receives a response from api.cloudpayments with the result of the transaction.
              //e.x. calling your Facebook Pixel analytics
            },
          },
        );
      };
      pay()
    </script>

    </html>
    
    `;

  const runBeforeFirst = `
    window.isNativeApp = true;
    true; // note: this is required, or you'll sometimes get silent failures
`;
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <WebView
          style={{flex: 1}}
          ref={r => (this.webref = r)}
          //   injectedJavaScript={runFirst}
          injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
          source={{html: customHtml}}
        />
      </SafeAreaView>
    </>
  );

  // <WebView source={{ html: customHtml }} />;
};

export default PaymentWidget;

const styles = StyleSheet.create({});
