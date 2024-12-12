import Chance from 'chance'

const chance = Chance()

export const fakeUserData = () => (
     chance.name({ middle : true })
    )

export const fakeCompany = () => {
  return chance.company()
}