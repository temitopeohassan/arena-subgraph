import {
  PropertyCreated as PropertyCreatedEvent,
  ShareBought as ShareBoughtEvent
} from "../generated/Contract/Contract"
import { PropertyCreated, ShareBought } from "../generated/schema"

export function handlePropertyCreated(event: PropertyCreatedEvent): void {
  let entity = new PropertyCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.propertyId = event.params.propertyId
  entity.name = event.params.name
  entity.totalShares = event.params.totalShares
  entity.sharePrice = event.params.sharePrice
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShareBought(event: ShareBoughtEvent): void {
  let entity = new ShareBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.propertyId = event.params.propertyId
  entity.shareId = event.params.shareId
  entity.sharePrice = event.params.sharePrice
  entity.newTokenId = event.params.newTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
