import kafka from 'kafka-node';
const client = new kafka.KafkaClient({ kafkaHost: '10.128.1.91:9092' });
client.connect();
const km = new kafka.KeyedMessage('rolledInitiative', '18');

const producer = new kafka.Producer(client);

const payloads = [{ topic: 'initiativeChanged', messages: km }];

producer.on('ready', () => {
  producer.send(payloads, (err, data) => {
    console.log(data);
  });
});
