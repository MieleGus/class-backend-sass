'use strict'

const Invite = use('App/Models/Invite')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
  /**
   * Show a list of all invites.
   * GET invites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async store ({ request, auth }) {

    const invites = requet.input('invites')

    const data = invites.map(email => ({
      email,
      user_id: auth.user_id,
      team_id: request.team.id
    }))

    await Invite.createMany(data)
  }

  /**
   * Display a single invite.
   * GET invites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

}

module.exports = InviteController
