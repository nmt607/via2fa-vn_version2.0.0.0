'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert('users', [
      {
        username: 'nmt607',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt607@gmail.com',
        phone: '0705542897',
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'admin',
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt601',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt601@gmail.com',
        phone: '0705542891',
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt602',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt602@gmail.com',
        phone: '0705542892',
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt603',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt603@gmail.com',
        phone: '0705542893',
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt604',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt604@gmail.com',
        phone: '0705542894',
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      },
      {
        username: 'nmt605',
        password: '$2a$10$hWI2dPFxJMWEezygU/Nt0.1CdCvoy/VoSXhyaNWWL176gOzYTKoeO',
        email: 'nmt605@gmail.com',
        phone: '0705542895',
        avatar: 'https://gravatar.com/avatar/01af23da56ae32f88cd54bf48294627e',
        role: 'client',
        createdAt: '2022-08-14 19:32:31',
        updatedAt: '2022-08-14 19:32:31'
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
