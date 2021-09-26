import * as apiModel from './api/hotel-collection.api-model';
import * as viewModel from './hotel-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  picture: `${process.env.BASE_PICTURES_URL}/${character.thumbNailUrl}`,
  name: character.name,
  description: character.shortDescription,
  rating: character.characterRating,
  address: character.address1,
});
