import bcrypt from 'bcrypt';

async function testBcrypt() {
  const hash = await bcrypt.hash('testpassword', 10);
  console.log('Hash gerado:', hash);
}

testBcrypt().catch(console.error);