'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert('users', [
      {
        username: 'nmt601',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt607@gmail.com',
        phone: '0705542897',
        amount: 25000.88,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'admin',
        deletedAt: null,
        createdAt: '2022-09-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt602',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt601@gmail.com',
        phone: '0705542891',
        amount: 0,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'super_admin',
        deletedAt: null,
        createdAt: '2022-08-10 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt603',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt602@gmail.com',
        amount: 14500000.45,
        phone: '0705542892',
        avatar: 'https//gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-11 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt604',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt603@gmail.com',
        phone: '0705542893',
        amount: 56000000,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-12 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt605',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt604@gmail.com',
        phone: '0705542894',
        amount: 790000.6789,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-13 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt606',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542895',
        amount: 0,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt607',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 999999999,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-15 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt608',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 0,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-16 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt648',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 123123,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-16 19:32:45',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt609',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 999999999,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-03-17 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt610',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 1600000,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-19 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt611',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 999999999,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-23 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt612',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 1800.22,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-19 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt613',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 11545456,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-31 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt614',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 999999999,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-27 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt621',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 999999999,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-08-15 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt5465',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 134324,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-06-19 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt641',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 345346644,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-11-15 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt667',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 34245245,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-12-15 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt656',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 555555,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-10-12 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt634',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542897',
        amount: 5653556,
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        deletedAt: null,
        createdAt: '2022-09-12 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
