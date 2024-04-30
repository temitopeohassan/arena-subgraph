import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { PropertyCreated, ShareBought } from "../generated/Contract/Contract"

export function createPropertyCreatedEvent(
  owner: Address,
  propertyId: BigInt,
  name: string,
  totalShares: BigInt,
  sharePrice: BigInt,
  image: string
): PropertyCreated {
  let propertyCreatedEvent = changetype<PropertyCreated>(newMockEvent())

  propertyCreatedEvent.parameters = new Array()

  propertyCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  propertyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromUnsignedBigInt(propertyId)
    )
  )
  propertyCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  propertyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalShares",
      ethereum.Value.fromUnsignedBigInt(totalShares)
    )
  )
  propertyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sharePrice",
      ethereum.Value.fromUnsignedBigInt(sharePrice)
    )
  )
  propertyCreatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return propertyCreatedEvent
}

export function createShareBoughtEvent(
  buyer: Address,
  propertyId: BigInt,
  shareId: BigInt,
  sharePrice: BigInt,
  newTokenId: BigInt
): ShareBought {
  let shareBoughtEvent = changetype<ShareBought>(newMockEvent())

  shareBoughtEvent.parameters = new Array()

  shareBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  shareBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromUnsignedBigInt(propertyId)
    )
  )
  shareBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "shareId",
      ethereum.Value.fromUnsignedBigInt(shareId)
    )
  )
  shareBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "sharePrice",
      ethereum.Value.fromUnsignedBigInt(sharePrice)
    )
  )
  shareBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "newTokenId",
      ethereum.Value.fromUnsignedBigInt(newTokenId)
    )
  )

  return shareBoughtEvent
}
