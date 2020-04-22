import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Message from './message-retrieve'

async function run(): Promise<any> {
  const payload = github.context.payload
  const branch = payload.pull_request.head.ref
  const repoName = payload.repository.name
  const repo = payload.repository.git_url
  try {
    if (branch && repo) {
      const message = new Message.MessageRetrieved(branch, repoName, repo)
      return message.run()
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
