const {PrismaClient} = require('@prisma/client');
const {mockDeep, mockReset, DeepMockProxy, JestMockExtended} = require('jest-mock-extended');

const prisma = new PrismaClient();

JestMockExtended.