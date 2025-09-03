const { PrismaClient } = require('@prisma/client');
const { createClient } = require('redis');

async function testConnections() {
  console.log('Testing database connection...');
  
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Test a simple query
    const userCount = await prisma.user.count();
    console.log(`✅ Database query successful. Users count: ${userCount}`);
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }

  console.log('\nTesting Redis connection...');
  
  try {
    const redis = createClient({
      url: 'redis://localhost:6379'
    });
    
    await redis.connect();
    console.log('✅ Redis connection successful');
    
    // Test a simple operation
    await redis.set('test', 'hello');
    const value = await redis.get('test');
    console.log(`✅ Redis operation successful. Test value: ${value}`);
    
    await redis.disconnect();
  } catch (error) {
    console.error('❌ Redis connection failed:', error.message);
  }
}

testConnections();
