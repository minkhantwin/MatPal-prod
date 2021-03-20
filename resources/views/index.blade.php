@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 shadow rounded">
            
            <form method="post" action="">

                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="0">
                </div>

                <div class="mb-3">
                    <label for="lb" class="form-label">Weight</label>
                    <div class="row p-0 m-0">
                        <div class="col-3 p-2">
                            <input type="number" class="form-control text-center" style="background-color: rgb(48, 48, 48);color:white" id="lb-front" >
                            
                        </div>
                        <div class="pt-4">
                            <strong>.</strong>
                        </div>
                        <div class="col p-2">
                            <button class="btn btn-dark" id="lb-back" value="00" type="button">00</button>
                        </div>
                        <div class="col p-2">
                            <button class="btn btn-danger" id="addw" data-cnt="0" value="00" type="button"> Add </button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">
                        <div class="form-group">
                            <label for="totalw">Total weight</label>
                            <input id="totalw" class="form-control text-center" disabled type="number"  value="0" name="totalw">
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="amount">Amount</label>
                            <input id="amount" class="form-control text-center" disabled type="number" value="0" name="amount">
                        </div>
                    </div>
                </div>
                
                <div class="mb-5" id="list-container">
                    <label for="">Records</label>
                    
                    
                </div>


                
            </form>


        </div>
    </div>
</div>
@endsection
