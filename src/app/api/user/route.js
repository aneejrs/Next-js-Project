import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
//GET (read)
export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return Response.json(users);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
//POST (create)
export async function POST(req){
    await connectDB();

    const body = await req.json();
    const newUser = await User.create(body);
    return Response.json({
      message :"User Saved",
      data : newUser
    });
  }

  //PUT (update)
  export async function PUT(req){
    await connectDB();
    const body = await req.json();
    const updateUser = await User.findByIdAndUpdate(body.id,
      {name: body.name, email: body.email},
      {new: true}
      );
    return Response.json(updateUser);
  }

  //Delete 

  export async function DELETE(req){
    await connectDB();
    const {id} = await req.json();
    await User.findByIdAndDelete(id);
    return Response.json({message: "User Deleted"});
  }