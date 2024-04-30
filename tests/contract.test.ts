import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { PropertyCreated } from "../generated/schema"
import { PropertyCreated as PropertyCreatedEvent } from "../generated/Contract/Contract"
import { handlePropertyCreated } from "../src/contract"
import { createPropertyCreatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let propertyId = BigInt.fromI32(234)
    let name = "Example string value"
    let totalShares = BigInt.fromI32(234)
    let sharePrice = BigInt.fromI32(234)
    let image = "Example string value"
    let newPropertyCreatedEvent = createPropertyCreatedEvent(
      owner,
      propertyId,
      name,
      totalShares,
      sharePrice,
      image
    )
    handlePropertyCreated(newPropertyCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PropertyCreated created and stored", () => {
    assert.entityCount("PropertyCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PropertyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PropertyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "propertyId",
      "234"
    )
    assert.fieldEquals(
      "PropertyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "PropertyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalShares",
      "234"
    )
    assert.fieldEquals(
      "PropertyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sharePrice",
      "234"
    )
    assert.fieldEquals(
      "PropertyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "image",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
