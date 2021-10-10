export default [
  `void setup() {
        pinMode(1, OUTPUT);
        
        
        
        }
        
        
        void loop() {
        digitalWrite(1,HIGH);
        delay(1000);
        digitalWrite(1,LOW);
        delay(1000);
        
        }`,
  `#include <SPI.h>
        #include <Wire.h>
        #include <Adafruit_GFX.h>
        #include <Adafruit_SSD1306.h>
        #include "SenseBoxMCU.h"
        
        
        #define OLED_RESET 4
        Adafruit_SSD1306 display(OLED_RESET);
        Lightsensor lightsensor;
        
        
        
        
        
        void setup() {
        senseBoxIO.powerI2C(true);
        delay(2000);
        display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
        display.display();
        delay(100);
        display.clearDisplay();
        lightsensor.begin();
        
        
        
        }
        
        
        void loop() {
          display.setCursor(0,0);
          display.setTextSize(1);
          display.setTextColor(WHITE,BLACK);
          display.println((String("Helligkeit:") + String(lightsensor.getIlluminance())));
        display.display();
        
        }
        `,
  `#include "SenseBoxMCU.h"


        Button button_1(1);
        Button button_2(2);
        
        
        
        
        
        void setup() {
        button_1.begin();
        button_2.begin();
        pinMode(3, OUTPUT);
        
        
        
        }
        
        
        void loop() {
        if (( button_1.isPressed() == true) && ( button_2.isPressed() == true)) {
          digitalWrite(3,HIGH);
        }
         else {
          digitalWrite(3,LOW);
        }
        
        
        }
        `,
  `#include <SPI.h>
        #include <Wire.h>
        #include <Adafruit_GFX.h>
        #include <Adafruit_SSD1306.h>
        #include "SenseBoxMCU.h"
        
        boolean status;
        
        float mikro;
        
        
        #define OLED_RESET 4
        Adafruit_SSD1306 display(OLED_RESET);
        Microphone microphone(A1);
        
        
        
        
        
        void setup() {
        senseBoxIO.powerI2C(true);
        delay(2000);
        display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
        display.display();
        delay(100);
        display.clearDisplay();
          status = false;
        
        pinMode(2, OUTPUT);
        
        
        
        }
        
        
        void loop() {
        mikro = microphone.getValue();
          display.setCursor(0,0);
          display.setTextSize(1);
          display.setTextColor(WHITE,BLACK);
          display.println(mikro);
        display.display();
        if (( mikro > 2) && ( status == false)) {
          digitalWrite(2,HIGH);
          delay(500);
          status = true;
        }
         else if (( mikro > 2) && ( status == true)) {
          digitalWrite(2,LOW);
          delay(500);
          status = false;
        }
        
        
        }`,
  `#include <SPI.h>
        #include <Wire.h>
        #include <Adafruit_GFX.h>
        #include <Adafruit_SSD1306.h>
        #include "SenseBoxMCU.h"
        
        int zufallszahl;
        
        
        #define OLED_RESET 4
        Adafruit_SSD1306 display(OLED_RESET);
        Button button_0(0);
        
        
        
        
        
        void setup() {
        senseBoxIO.powerI2C(true);
        delay(2000);
        display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
        display.display();
        delay(100);
        display.clearDisplay();
        button_0.begin();
        
        
        
        }
        
        
        void loop() {
        if (button_0.wasPressed()) {
          zufallszahl = undefined;
          switch () {
          case 0:
        
          break;
          case 0:
        
          break;
          case 0:
        
          break;
          case 0:
        
          break;
          default:
        
           break;
          }
        }
        
        
        }`,
  `void setup() {



        }
        
        
        void loop() {
        for (i = 1; i <= 255; i += 1) {
        }
        for (j = 1; j <= 10; j += 1) {
        }
        for (k = 1; k <= 10; k += 1) {
        }
        
        }
        `,
  `#include "SenseBoxMCU.h"

        int abstand;
        
        
        Ultrasonic UltrasonicA(1,2);
        
        
        
        
        
        void setup() {
        pinMode(5, OUTPUT);
        
        
        
        
        }
        
        
        void loop() {
        abstand = UltrasonicA.getDistance();
        tone(5,220);
        delay(100);
        noTone(5);
        delay((10 * abstand));
        
        }
        `,
  `#include "SenseBoxMCU.h"
        #include <SPI.h>
        #include <lmic.h>
        #include <hal/hal.h>
        #include <SparkFun_u-blox_GNSS_Arduino_Library.h>
        #include <Wire.h>
        
        
        
            // LoRaWAN NwkSKey, network session key
            // This is the default Semtech key, which is used by the early prototype TTN
            // network.
            static const PROGMEM u1_t NWKSKEY[16] = { NWSKEY };
        
            // LoRaWAN AppSKey, application session key
            // This is the default Semtech key, which is used by the early prototype TTN
            // network.
            static const u1_t PROGMEM APPSKEY[16] = { APPSKEY };
        
            // LoRaWAN end-device address (DevAddr)
            static const u4_t DEVADDR = 0xDEVADDR;
        
            // These callbacks are only used in over-the-air activation, so they are
            // left empty here (we cannot leave them out completely unless
            // DISABLE_JOIN is set in config.h, otherwise the linker will complain).
            void os_getArtEui (u1_t* buf) { }
            void os_getDevEui (u1_t* buf) { }
            void os_getDevKey (u1_t* buf) { }
        
            static osjob_t sendjob;
        
            // Schedule TX every this many seconds (might become longer due to duty
            // cycle limitations).
            const unsigned TX_INTERVAL = 300;
        
            // Pin mapping
            const lmic_pinmap lmic_pins = {
                .nss = PIN_XB1_CS,
                .rxtx = LMIC_UNUSED_PIN,
                .rst = LMIC_UNUSED_PIN,
                .dio = {PIN_XB1_INT, PIN_XB1_INT, LMIC_UNUSED_PIN},
            };
        SFE_UBLOX_GNSS myGNSS;
        
        
            void initLora() {
              delay(2000);
              // LMIC init
              os_init();
              // Reset the MAC state. Session and pending data transfers will be discarded.
              LMIC_reset();
        
              // Set static session parameters. Instead of dynamically establishing a session
              // by joining the network, precomputed session parameters are be provided.
              #ifdef PROGMEM
              // On AVR, these values are stored in flash and only copied to RAM
              // once. Copy them to a temporary buffer here, LMIC_setSession will
              // copy them into a buffer of its own again.
              uint8_t appskey[sizeof(APPSKEY)];
              uint8_t nwkskey[sizeof(NWKSKEY)];
              memcpy_P(appskey, APPSKEY, sizeof(APPSKEY));
              memcpy_P(nwkskey, NWKSKEY, sizeof(NWKSKEY));
              LMIC_setSession (0x1, DEVADDR, nwkskey, appskey);
              #else
              // If not running an AVR with PROGMEM, just use the arrays directly
              LMIC_setSession (0x1, DEVADDR, NWKSKEY, APPSKEY);
              #endif
        
              #if defined(CFG_eu868)
              // Set up the channels used by the Things Network, which corresponds
              // to the defaults of most gateways. Without this, only three base
              // channels from the LoRaWAN specification are used, which certainly
              // works, so it is good for debugging, but can overload those
              // frequencies, so be sure to configure the full frequency range of
              // your network here (unless your network autoconfigures them).
              // Setting up channels should happen after LMIC_setSession, as that
              // configures the minimal channel set.
              // NA-US channels 0-71 are configured automatically
              LMIC_setupChannel(0, 868100000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(1, 868300000, DR_RANGE_MAP(DR_SF12, DR_SF7B), BAND_CENTI);      // g-band
              LMIC_setupChannel(2, 868500000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(3, 867100000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(4, 867300000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(5, 867500000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(6, 867700000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(7, 867900000, DR_RANGE_MAP(DR_SF12, DR_SF7),  BAND_CENTI);      // g-band
              LMIC_setupChannel(8, 868800000, DR_RANGE_MAP(DR_FSK,  DR_FSK),  BAND_MILLI);      // g2-band
              // TTN defines an additional channel at 869.525Mhz using SF9 for class B
              // devices' ping slots. LMIC does not have an easy way to define set this
              // frequency and support for class B is spotty and untested, so this
              // frequency is not configured here.
              #elif defined(CFG_us915)
              // NA-US channels 0-71 are configured automatically
              // but only one group of 8 should (a subband) should be active
              // TTN recommends the second sub band, 1 in a zero based count.
              // https://github.com/TheThingsNetwork/gateway-conf/blob/master/US-global_conf.json
              LMIC_selectSubBand(1);
              #endif
        
              // Disable link check validation
              LMIC_setLinkCheckMode(0);
        
              // TTN uses SF9 for its RX2 window.
              LMIC.dn2Dr = DR_SF9;
        
              // Set data rate and transmit power for uplink (note: txpow seems to be ignored by the library)
              LMIC_setDrTxpow(DR_SF7,14);
        
              // Start job
              do_send(&sendjob);
            }
        
            void onEvent (ev_t ev) {
              Serial.print(os_getTime());
              Serial.print(": ");
              switch(ev) {
                  case EV_SCAN_TIMEOUT:
                      Serial.println(F("EV_SCAN_TIMEOUT"));
                      break;
                  case EV_BEACON_FOUND:
                      Serial.println(F("EV_BEACON_FOUND"));
                      break;
                  case EV_BEACON_MISSED:
                      Serial.println(F("EV_BEACON_MISSED"));
                      break;
                  case EV_BEACON_TRACKED:
                      Serial.println(F("EV_BEACON_TRACKED"));
                      break;
                  case EV_JOINING:
                      Serial.println(F("EV_JOINING"));
                      break;
                  case EV_JOINED:
                      Serial.println(F("EV_JOINED"));
                      break;
                  case EV_RFU1:
                      Serial.println(F("EV_RFU1"));
                      break;
                  case EV_JOIN_FAILED:
                      Serial.println(F("EV_JOIN_FAILED"));
                      break;
                  case EV_REJOIN_FAILED:
                      Serial.println(F("EV_REJOIN_FAILED"));
                      break;
                  case EV_TXCOMPLETE:
                      Serial.println(F("EV_TXCOMPLETE (includes waiting for RX windows)"));
                      if (LMIC.txrxFlags & TXRX_ACK)
                        Serial.println(F("Received ack"));
                      if (LMIC.dataLen) {
                        Serial.println(F("Received "));
                        Serial.println(LMIC.dataLen);
                        Serial.println(F(" bytes of payload"));
                      }
                      // Schedule next transmission
                      os_setTimedCallback(&sendjob, os_getTime()+sec2osticks(TX_INTERVAL), do_send);
                      break;
                  case EV_LOST_TSYNC:
                      Serial.println(F("EV_LOST_TSYNC"));
                      break;
                  case EV_RESET:
                      Serial.println(F("EV_RESET"));
                      break;
                  case EV_RXCOMPLETE:
                      // data received in ping slot
                      Serial.println(F("EV_RXCOMPLETE"));
                      break;
                  case EV_LINK_DEAD:
                      Serial.println(F("EV_LINK_DEAD"));
                      break;
                  case EV_LINK_ALIVE:
                      Serial.println(F("EV_LINK_ALIVE"));
                      break;
                   default:
                      Serial.println(F("Unknown event"));
                      break;
              }
          }
        
        
        
          void do_send(osjob_t* j){
              // Check if there is not a current TX/RX job running
              if (LMIC.opmode & OP_TXRXPEND) {
                  Serial.println(F("OP_TXRXPEND, not sending"));
              } else {
        
                int fixType = myGNSS.getFixType();
                if (fixType >= 3) { // we have a 3D fix
                  int32_t latitude = myGNSS.getLatitude();       // in degrees * 10^-7
                  int32_t longitude = myGNSS.getLongitude();     // in degrees * 10^-7
                  int32_t altitude = myGNSS.getAltitudeMSL() / 100;      // in dm above mean sea level
                  uint16_t pDOP = myGNSS.getPDOP();                 //  positional dillution of precision
        
                  uint8_t data[12];
        
                  data[0] = latitude;
                  data[1] = latitude >> 8;
                  data[2] = latitude >> 16;
                  data[3] = latitude >> 24;
        
                  data[4] = longitude;
                  data[5] = longitude >> 8;
                  data[6] = longitude >> 16;
                  data[7] = longitude >> 24;
        
                  data[8] = altitude;
                  data[9] = altitude >> 8;
        
                  data[10] = pDOP;
                  data[11] = pDOP >> 8;
        
        
                  // Prepare upstream data transmission at the next possible time.
                  LMIC_setTxData2(1, data, sizeof(data), 0);
                  Serial.println(F("Packet queued"));
                } else {
                  // wait for better fix type
                  os_setTimedCallback(&sendjob, os_getTime() + sec2osticks(TX_INTERVAL), do_send);
                }
              }
              // Next TX is scheduled after TX_COMPLETE event.
          }
        
        
        void setup() {
        Serial.begin(9600);
        delay(1000);
        
         Wire.begin();
        
          if (myGNSS.begin() == false) //Connect to the Ublox module using Wire port
          {
            Serial.println(F("Ublox GPS not detected at default I2C address. Please check wiring. Freezing."));
            while (1);
          }
        
          myGNSS.setI2COutput(COM_TYPE_UBX); //Set the I2C port to output UBX only (turn off NMEA noise)
          myGNSS.saveConfiguration(); //Save the current settings to flash and BBR
        
        
        initLora();
        
        
        }
        
        
        void loop() {
        os_runloop_once();
        
        }`,
  `#include <SPI.h>
        #include <Wire.h>
        #include <Adafruit_GFX.h>
        #include <Adafruit_SSD1306.h>
        #include "SenseBoxMCU.h"
        #include <SD.h>
        
        int distanz;
        
        int grenzwert;
        
        boolean SpurFrei;
        
        const long interval = 60000;
        long time_start = 0;
        long time_actual = 0;
        int fahrzeuge;
        
        
        #define OLED_RESET 4
        Adafruit_SSD1306 display(OLED_RESET);
        File Data.txt;
        Ultrasonic UltrasonicA(1,2);
        
        
        
        
        
        void setup() {
        senseBoxIO.powerI2C(true);
        delay(2000);
        display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
        display.display();
        delay(100);
        display.clearDisplay();
        SD.begin(28);
        
        Data.txt = SD.open("Data.txt.txt", FILE_WRITE);
        Data.txt.close();
        
          Data.txt = SD.open("Data.txt.txt", FILE_WRITE);
            Data.txt.println((String("Zeit") + String(";") + String("Anzahl Fahrzeuge pro Minute") + String(";") + String("Breite der Fahrspur in cm")));
          Data.txt.close();
        
        
        
        
        }
        
        
        void loop() {
        distanz = UltrasonicA.getDistance();
        grenzwert = (map(0,0,1023,0,300));
        if (( distanz > grenzwert)) {
          SpurFrei = true;
        }
        
        if (( SpurFrei == true) && ( distanz <= grenzwert)) {
          fahrzeuge += 1;
          SpurFrei = false;
        }
        
        time_start = millis();
        if (time_start > time_actual + interval) {
          time_actual = millis();
          Data.txt = SD.open("Data.txt.txt", FILE_WRITE);
            Data.txt.println((String(millis()) + String(";") + String(fahrzeuge) + String(";") + String(grenzwert)));
          Data.txt.close();
          fahrzeuge = 0;
        }
        
        }
        `,
  `#include <phyphoxBle.h>
        #include "SenseBoxMCU.h"
        #include "SparkFun_SCD30_Arduino_Library.h"
        
        const long interval = 2000;
        long time_start = 0;
        long time_actual = 0;
        
        SCD30 airSensor;
        
        
        
        
        
        void setup() {
         Wire.begin();
          if (airSensor.begin() == false)
          {
            while (1)
              ;
          }
        
        PhyphoxBLE::start("CO2 Ampel");
        PhyphoxBleExperiment experiment;
        experiment.setTitle("CO2Ampel");
        experiment.setCategory("senseBox Experimente");
        experiment.setDescription("Sendet die Messwerte der CO2 Ampel");
        PhyphoxBleExperiment::View firstView;
        firstView.setLabel("Messwerte"); //Create a "view"
          PhyphoxBleExperiment::Graph CO2Konzentration;
          CO2Konzentration.setLabel("CO2Konzentration");
          CO2Konzentration.setUnitX("s");
          CO2Konzentration.setUnitY("ppm");
          CO2Konzentration.setLabelX("Zeit");
          CO2Konzentration.setLabelY("Konzentration");
          CO2Konzentration.setStyle("line");
          CO2Konzentration.setChannel(0, 1);
          firstView.addElement(CO2Konzentration);
          PhyphoxBleExperiment::Graph Temperatur;
          Temperatur.setLabel("Temperatur");
          Temperatur.setUnitX("s");
          Temperatur.setUnitY("°C");
          Temperatur.setLabelX("Zeit");
          Temperatur.setLabelY("Temperatur");
          Temperatur.setStyle("line");
          Temperatur.setChannel(0, 2);
          firstView.addElement(Temperatur);
        
        experiment.addView(firstView);
        PhyphoxBLE::addExperiment(experiment);
        
        
        }
        
        
        void loop() {
        PhyphoxBLE::poll();
        time_start = millis();
        if (time_start > time_actual + interval) {
          time_actual = millis();
            float channel1 = airSensor.getCO2();
            float channel2 = airSensor.getTemperature();
        
          PhyphoxBLE::write(channel1, channel2);}
        
        }`,
  `#include <RV8523.h>
        #include "SenseBoxMCU.h"
        #include <SPI.h>
        #include <Wire.h>
        #include <Adafruit_GFX.h>
        #include <Adafruit_SSD1306.h>
        
        char timestamp[20];
        
        RV8523 rtc;
        #define OLED_RESET 4
        Adafruit_SSD1306 display(OLED_RESET);
        
        
        char* getTimeStamp() {
        uint8_t sec, min, hour, day, month;
         uint16_t year;
         rtc.get(&sec, &min, &hour, &day, &month, &year);
         sprintf(timestamp, "%02d-%02d-%02dT%02d:%02d:%02dZ", year, month, day, hour, min, sec);
         return timestamp;
         }
        
        
        
        
        
        void setup() {
        rtc.begin();
        senseBoxIO.powerI2C(true);
        delay(2000);
        display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
        display.display();
        delay(100);
        display.clearDisplay();
        rtc.start();
        rtc.batterySwitchOver(1);
        rtc.set(0, 0, 0, 0, 0, 0);
        
        
        
        }
        
        
        void loop() {
          display.setCursor(0,0);
          display.setTextSize(1);
          display.setTextColor(WHITE,BLACK);
          display.println(getTimeStamp());
        display.display();
        delay(1000);
        display.clearDisplay();
        
        }`,
];
