require 'docking_station'

describe DockingStation do

bike = Bike.new

  it { is_expected.to respond_to :release_bike }
  it { allow(subject).to receive(:release_bike).and_return(bike)}
  it { expect(bike.working?).to eq true }
  it { is_expected.to respond_to :dock_bike }
  it { is_expected.to respond_to(:dock_bike).with(1).argument }
  it 'returns a docked bike' do
#    bike = Bike.new
   subject.dock_bike(bike)
   expect(subject.bike).to eq bike
 end
end
