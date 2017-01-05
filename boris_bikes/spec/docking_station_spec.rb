require 'docking_station'

describe DockingStation do

bike = Bike.new 

  it { is_expected.to respond_to :release_bike }
  it { allow(subject).to receive(:release_bike).and_return(Bike.new)}
  it { expect(bike.working?).to eq true }
end
