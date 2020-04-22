import Message = require('../src/message-retrieve')

test('should return false if no matched string', async () => {
  const message = new Message.MessageRetrieved(
    'master',
    'retrieve-commit-messages-from-pr',
    'git://github.com/atlwendy/retrieve-commit-messages-from-pr.git'
  )
  await expect(message.run()).resolves.toBeFalsy()
})
